import { GITHUB_USERNAME } from '@/constants';
import type { GitHubRepo, GitHubUser } from '@/types';

const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return (await response.json()) as GitHubUser;
  } catch (error) {
    console.error('GitHub API error:', error);
    return null;
  }
}

export async function fetchGitHubRepos(
  sort: 'updated' | 'stars' = 'updated',
  limit: number = 6
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=${sort === 'stars' ? 'stars' : 'updated'}&per_page=${limit}`
    );
    if (!response.ok) throw new Error('Failed to fetch repos');
    const repos = (await response.json()) as GitHubRepo[];
    return repos.filter((repo) => !repo.fork).slice(0, limit);
  } catch (error) {
    console.error('GitHub API error:', error);
    return [];
  }
}

export async function fetchGitHubStats(): Promise<{
  repos: number;
  followers: number;
  following: number;
  stars: number;
}> {
  try {
    const [user, repos] = await Promise.all([
      fetchGitHubUser(),
      fetch(`${BASE_URL}/users/${GITHUB_USERNAME}/repos?per_page=100`).then((r) => r.json()),
    ]);

    const totalStars = (repos as GitHubRepo[]).reduce((acc, repo) => acc + repo.stargazers_count, 0);

    return {
      repos: user?.public_repos ?? 0,
      followers: user?.followers ?? 0,
      following: user?.following ?? 0,
      stars: totalStars,
    };
  } catch (error) {
    console.error('GitHub API error:', error);
    return { repos: 0, followers: 0, following: 0, stars: 0 };
  }
}
