import { gql } from '@apollo/client';
import { Card } from '../components/Card';
import { getClient } from '../util/apolloClient';
import { FeaturedContribution } from './FeaturedContribution';
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

const openSourceContributions: Array<{
  title: string;
  repo: string;
  date: string;
  badge: 'open' | 'closed' | 'merged';
  type: 'issue' | 'pr';
  url: string;
  description: string;
}> = [
  {
    title: 'Remove unsupported providerImportSource option',
    repo: 'vercel/next.js',
    date: '2024-09-03',
    badge: 'merged',
    type: 'pr',
    url: 'https://github.com/vercel/next.js/pull/69609',
    description:
      'Removed an outdated reference to the deprecated providerImportSource option in the Next.js MDX integration guide. This ensures alignment with the current MDX runtime behavior and prevents confusion when applying custom components via MDXProvider.',
  },
  {
    title: 'Update @vercel/node in API Routes Vercel section in the Expo docs',
    repo: 'expo/expo',
    date: '2025-02-24',
    badge: 'merged',
    type: 'pr',
    url: 'https://github.com/expo/expo/pull/35133',
    description:
      'Fixes outdated @vercel/node@3.0.11 in Expo docs. That version fails on Vercel with Node.js 22. The PR updates the package to the latest LTS-compatible version to ensure deployments work with Node.js 22. ',
  },
  {
    title: '[template] Add cleanup prompt in reset-project script',
    repo: 'expo/expo',
    date: '2025-02-07',
    badge: 'merged',
    type: 'pr',
    url: 'https://github.com/expo/expo/pull/34200',
    description:
      'Improved the reset-project script in Expo by adding a prompt to optionally delete the /app-example folder and the script reference in package.json, making cleanup easier and more user-friendly after a project reset.',
  },
  {
    title: '[docs] Change API entry file in vercel.json from .js to .ts',
    repo: 'expo/expo',
    date: '2024-07-16',
    badge: 'merged',
    type: 'pr',
    url: 'https://github.com/expo/expo/pull/30421',
    description:
      'Fixed Vercel API route config in docs by updating vercel.json to reference /api/index.ts instead of /api/index.js. This resolves deployment errors caused by mismatched file extensions.',
  },
  {
    title: 'Share custom components in nested MDX files',
    repo: 'kentcdodds/mdx-bundler',
    date: '2024-03-28',
    badge: 'merged',
    type: 'pr',
    url: 'https://github.com/kentcdodds/mdx-bundler/pull/227',
    description:
      'Added README section to guide sharing custom components in nested MDX files using MDXProvider. Fixes rendering issues by ensuring consistent component access throughout MDX hierarchy.',
  },
];

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
        I enjoy contributing to open source projects and working together with
        the developer community. Below are a few of my most meaningful
        contributions, including improvements to developer experience and
        project infrastructure. I often spot and report issues, open pull
        requests, and look for ways to improve workflows or documentation.
      </p>
      <p className="mb-4 text-gray-600">
        I'm always open to new opportunities to collaborate, so if you have a
        project in mind or something I could help with, feel free to get in
        touch.
      </p>
      <h3 className="relative mb-4 mt-4 inline-block text-lg font-semibold text-gray-900">
        <span className="relative z-10">Highlighted Contributions</span>
        <span className="absolute bottom-0 left-0 h-1 w-full bg-red-500 opacity-40 rounded" />
      </h3>
      <p className="mb-4 text-gray-600">
        These are some of the pull requests I'm most proud of. They reflect my
        focus on improving developer experience, fixing subtle bugs, and
        contributing to widely used tools and frameworks:
      </p>
      {openSourceContributions.map((contribution) => (
        <FeaturedContribution
          key={`contribution-${contribution.url}`}
          title={contribution.title}
          repo={contribution.repo}
          date={contribution.date}
          badge={contribution.badge}
          type={contribution.type}
          url={contribution.url}
          description={contribution.description}
        />
      ))}

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
      <div className="grid mb-10 gap-6 grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]">
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
