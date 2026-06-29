import { useEffect, useState } from 'react';
import { fetchGitHubRepos, fetchGitHubStats, fetchGitHubUser } from '@services/github';
import type { GitHubRepo, GitHubUser } from '@/types';

export function useGitHubUser() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubUser().then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, []);

  return { user, loading };
}

export function useGitHubRepos(sort: 'updated' | 'stars' = 'updated', limit = 6) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos(sort, limit).then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, [sort, limit]);

  return { repos, loading };
}

export function useGitHubStats() {
  const [stats, setStats] = useState({ repos: 0, followers: 0, following: 0, stars: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats().then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  return { stats, loading };
}
