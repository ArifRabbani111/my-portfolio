import React, { useEffect, useState } from 'react';
import codeforcesLogo from '../assests/codeforces.png';
import codechefLogo from '../assests/codechef.jpg';
import leetcodeLogo from '../assests/leetcode.png';
import vjudgeLogo from '../assests/vujdge.png';
import hackerRankLogo from '../assests/HackerRank.png';

const CP = () => {
  const [cfStats, setCfStats] = useState(null);
  const [lcStats, setLcStats] = useState(null);

  useEffect(() => {
    fetch('https://codeforces.com/api/user.info?handles=ArifWritesCode')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'OK') setCfStats(data.result[0]);
      })
      .catch(console.error);

    fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query userProfile($username: String!) {
            matchedUser(username: $username) {
              username
              profile {
                reputation
              }
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username: 'arif_666' },
      }),
    })
      .then(res => res.json())
      .then(json => {
        const user = json.data?.matchedUser;
        if (user) {
          const stats = user.submitStats.acSubmissionNum;
          const solvedEasy = stats.find(d => d.difficulty === 'Easy')?.count || 0;
          const solvedMedium = stats.find(d => d.difficulty === 'Medium')?.count || 0;
          const solvedHard = stats.find(d => d.difficulty === 'Hard')?.count || 0;

          setLcStats({
            totalSolved: solvedEasy + solvedMedium + solvedHard,
            reputation: user.profile.reputation,
          });
        }
      })
      .catch(console.error);
  }, []);

  const platforms = [
    {
      name: 'Codeforces',
      username: 'ArifWritesCode',
      logo: codeforcesLogo,
      link: 'https://codeforces.com/profile/ArifWritesCode',
      color: 'bg-red-500',
      stats: cfStats && {
        rating: cfStats.rating,
        maxRating: cfStats.maxRating,
        rank: cfStats.rank,
        maxRank: cfStats.maxRank,
      },
    },
    {
      name: 'CodeChef',
      username: 'backbencher666',
      logo: codechefLogo,
      link: 'https://www.codechef.com/users/backbencher666',
      color: 'bg-purple-600',
    },
    {
      name: 'LeetCode',
      username: 'arif_666',
      logo: leetcodeLogo,
      link: 'https://leetcode.com/u/arif_666/',
      color: 'bg-yellow-500',
      stats: lcStats && {
        totalSolved: lcStats.totalSolved,
        reputation: lcStats.reputation,
      },
    },
    {
      name: 'VJudge',
      username: 'arif1000',
      logo: vjudgeLogo,
      link: 'https://vjudge.net/user/arif1000',
      color: 'bg-blue-500',
    },
    {
      name: 'HackerRank',
      username: '@arifrabbani00000',
      logo: hackerRankLogo,
      link: 'https://www.hackerrank.com/profile/arifrabbani00000',
      color: 'bg-green-500',
    },
  ];

  return (
    <section id="cp" className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-white">Competitive Programming Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-white ${p.color}`}
          >
            <div className="flex items-center space-x-4 mb-3">
              <img src={p.logo} alt={p.name} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-sm">{p.username}</p>
              </div>
            </div>
            {p.stats && (
              <div className="text-sm space-y-1">
                {p.name === 'Codeforces' && (
                  <>
                    <p>Rating: <span className="font-bold">{p.stats.rating}</span></p>
                    <p>Max Rating: <span className="font-bold">{p.stats.maxRating}</span></p>
                    <p>Rank: <span className="capitalize">{p.stats.rank}</span></p>
                    <p>Max Rank: <span className="capitalize">{p.stats.maxRank}</span></p>
                  </>
                )}
                {p.name === 'LeetCode' && (
                  <>
                    <p>Total Solved: <span className="font-bold">{p.stats.totalSolved}</span></p>
                    <p>Reputation: <span className="font-bold">{p.stats.reputation}</span></p>
                  </>
                )}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default CP;
