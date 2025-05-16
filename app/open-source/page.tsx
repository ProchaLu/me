import { gql } from '@apollo/client';
import Image from 'next/image';
import { getClient } from '../util/apolloClient';

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

export default async function Home() {
  const { data } = await getClient().query<GitHubProfileType>({
    query: gql`
      query GithubProfile($username: String = "prochaLu") {
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

        issues(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            title
            url
            createdAt
            repository {
              nameWithOwner
            }
          }
        }

        pullRequests(
          first: 10
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
    `,
  });

  return (
    <main className="max-w-xl mx-auto p-4">
      <section className="mt-6">
        <h3 className="text-lg font-semibold">🐞 Issues I Created</h3>
        <ul className="list-disc ml-5">
          {data.user.issues.nodes.map((issue) => (
            <li key={`issue-${issue.title}`}>
              <a
                href={issue.url}
                target="_blank"
                className="text-blue-600 underline"
                rel="noreferrer"
              >
                {issue.title}
              </a>{' '}
              <span className="text-gray-500 text-sm">
                in {issue.repository.nameWithOwner}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">🚀 Pull Requests I Created</h3>
        <ul className="list-disc ml-5">
          {data.user.pullRequests.nodes.map((pr) => (
            <li key={`pr-${pr.title}`}>
              <a
                href={pr.url}
                target="_blank"
                className="text-blue-600 underline"
                rel="noreferrer"
              >
                {pr.title}
              </a>{' '}
              <span className="text-gray-500 text-sm">
                in {pr.repository.nameWithOwner} ({pr.state}
                {pr.merged ? ', merged' : ''})
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
