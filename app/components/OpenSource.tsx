import { gql } from '@apollo/client';
import { Card } from '../components/Card';
import { getClient } from '../util/apolloClient';
import IconHeaderSection from './IconHeaderSection';

export type GitHubProfileType = {
  user: {
    name: string;
    avatarUrl: string;
    repositories: {
      edges: {
        node: {
          name: string;
          id: string;
          defaultBranchRef: {
            name: string;
          };
        };
      }[];
    };
    issues: {
      nodes: {
        title: string;
        url: string;
        repository: {
          nameWithOwner: string;
        };
        createdAt: string;
        state: string;
      }[];
    };
    pullRequests: {
      nodes: {
        title: string;
        url: string;
        repository: {
          nameWithOwner: string;
        };
        createdAt: string;
        state: string;
        merged: boolean;
      }[];
    };
  };
};

export default async function OpenSource() {
  const { data } = await getClient().query<GitHubProfileType>({
    query: gql`
      query GithubProfile($username: String = "prochaLu") {
        user(login: $username) {
          name
          avatarUrl

          repositories(first: 10) {
            edges {
              node {
                name
                id
                defaultBranchRef {
                  name
                }
              }
            }
          }

          issues(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
            nodes {
              title
              url
              createdAt
              repository {
                nameWithOwner
              }
              state
            }
          }

          pullRequests(
            first: 20
            orderBy: { field: CREATED_AT, direction: DESC }
          ) {
            nodes {
              title
              url
              createdAt
              repository {
                nameWithOwner
              }
              state
              merged
            }
          }
        }
      }
    `,
  });

  const externalIssues = data.user.issues.nodes.filter(
    (issue) =>
      !issue.repository.nameWithOwner.toLowerCase().startsWith('prochalu/'),
  );

  const externalPRs = data.user.pullRequests.nodes.filter(
    (pr) => !pr.repository.nameWithOwner.toLowerCase().startsWith('prochalu/'),
  );

  return (
    <>
      <IconHeaderSection props={{ id: 'open-source' }}>
        <span className="relative mr-3 flex h-10 w-10 items-center justify-center">
          <span className="absolute -inset-2 rounded-full bg-red-500 blur-[16px] opacity-70" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-laptop-minimal-icon lucide-laptop-minimal"
          >
            <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
            <line x1="2" x2="22" y1="20" y2="20" />
          </svg>
        </span>
        Open Source
      </IconHeaderSection>
      <p className="mb-4 text-gray-600">
        I enjoy contributing to open source projects and collaborating with the
        community. Below, you will find the latest 20 issues and pull requests I
        have worked on.
      </p>
      <h3 className="relative mb-4 mt-4 inline-block text-lg font-semibold text-gray-900">
        <span className="relative z-10">Issues</span>
        <span className="absolute bottom-0 left-0 h-1 w-full bg-red-500 opacity-40 rounded" />
      </h3>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]">
        {externalIssues.map((issue) => (
          <Card
            key={`issue-${issue.url}`}
            title={issue.title}
            repo={issue.repository.nameWithOwner}
            date={issue.createdAt}
            url={issue.url}
            badge={issue.state === 'CLOSED' ? 'closed' : 'open'}
            type="issue"
          />
        ))}
      </div>
      <h3 className="relative mb-4 mt-8 inline-block text-lg font-semibold text-gray-900">
        <span className="relative z-10">PRs</span>
        <span className="absolute bottom-0 left-0 h-1 w-full bg-red-500 opacity-40 rounded" />
      </h3>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]">
        {externalPRs.map((pr) => (
          <Card
            key={`pr-${pr.url}`}
            title={pr.title}
            repo={pr.repository.nameWithOwner}
            date={pr.createdAt}
            url={pr.url}
            badge={
              pr.merged ? 'merged' : pr.state === 'CLOSED' ? 'closed' : 'open'
            }
            type="pr"
          />
        ))}
      </div>
    </>
  );
}
