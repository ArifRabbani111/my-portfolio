import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTrophy, FaChartLine, FaMedal, FaCode, FaStar } from "react-icons/fa";
import codeforcesLogo from '../assests/codeforces.png';
import codechefLogo from '../assests/codechef.jpg';
import leetcodeLogo from '../assests/leetcode.png';
import vjudgeLogo from '../assests/vujdge.png';
import hackerRankLogo from '../assests/HackerRank.png';

const CP = () => {
  const [cfStats, setCfStats] = useState(null);
  const [lcStats, setLcStats] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cfResponse, lcResponse] = await Promise.allSettled([
          fetch('https://codeforces.com/api/user.info?handles=ArifWritesCode'),
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
        ]);

        if (cfResponse.status === 'fulfilled') {
          const data = await cfResponse.value.json();
          if (data.status === 'OK') setCfStats(data.result[0]);
        }

        if (lcResponse.status === 'fulfilled') {
          const json = await lcResponse.value.json();
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
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchData();
  }, []);

  const getRatingColor = (rating) => {
    if (!rating) return 'text-gray-400';
    if (rating >= 2400) return 'text-red-400';
    if (rating >= 2100) return 'text-red-300';
    if (rating >= 1900) return 'text-purple-400';
    if (rating >= 1600) return 'text-blue-400';
    if (rating >= 1400) return 'text-cyan-400';
    if (rating >= 1200) return 'text-green-400';
    return 'text-gray-300';
  };

  const platforms = [
    {
      name: 'Codeforces',
      username: 'ArifWritesCode',
      logo: codeforcesLogo,
      link: 'https://codeforces.com/profile/ArifWritesCode',
      gradient: 'from-red-500/90 via-red-600/90 to-red-700/90',
      bgGradient: 'from-red-500/20 to-red-700/20',
      iconColor: 'text-red-400',
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
      gradient: 'from-purple-500/90 via-purple-600/90 to-purple-700/90',
      bgGradient: 'from-purple-500/20 to-purple-700/20',
      iconColor: 'text-purple-400',
    },
    {
      name: 'LeetCode',
      username: 'arif_666',
      logo: leetcodeLogo,
      link: 'https://leetcode.com/u/arif_666/',
      gradient: 'from-yellow-500/90 via-orange-500/90 to-orange-600/90',
      bgGradient: 'from-yellow-500/20 to-orange-600/20',
      iconColor: 'text-yellow-400',
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
      gradient: 'from-blue-500/90 via-blue-600/90 to-blue-700/90',
      bgGradient: 'from-blue-500/20 to-blue-700/20',
      iconColor: 'text-blue-400',
    },
    {
      name: 'HackerRank',
      username: '@arifrabbani00000',
      logo: hackerRankLogo,
      link: 'https://www.hackerrank.com/profile/arifrabbani00000',
      gradient: 'from-green-500/90 via-emerald-500/90 to-emerald-600/90',
      bgGradient: 'from-green-500/20 to-emerald-600/20',
      iconColor: 'text-green-400',
    },
  ];

  return (
    <section id="cp" className="w-full py-20 md:py-32 px-4 md:px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Competitive Programming
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            My profiles across various competitive programming platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-card/80 to-dark-surface/80 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.gradient} rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${p.gradient} p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-400 truncate">{p.username}</p>
                    </div>
                  </div>
                  <FaExternalLinkAlt className={`${p.iconColor} opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 ml-2`} />
                </div>

                {/* Stats Section */}
                {p.stats ? (
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {p.name === 'Codeforces' && (
                      <>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-2">
                            <FaChartLine className="text-red-400 text-sm" />
                            <span className="text-sm text-gray-300">Current Rating</span>
                          </div>
                          <span className={`font-bold text-lg ${getRatingColor(p.stats.rating)}`}>
                            {p.stats.rating || 'N/A'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-2">
                            <FaTrophy className="text-yellow-400 text-sm" />
                            <span className="text-sm text-gray-300">Max Rating</span>
                          </div>
                          <span className={`font-bold text-lg ${getRatingColor(p.stats.maxRating)}`}>
                            {p.stats.maxRating || 'N/A'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-2">
                            <FaMedal className="text-purple-400 text-sm" />
                            <span className="text-sm text-gray-300">Rank</span>
                          </div>
                          <span className="font-semibold text-white capitalize">
                            {p.stats.rank || 'N/A'}
                          </span>
                        </div>
                      </>
                    )}
                    {p.name === 'LeetCode' && (
                      <>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-2">
                            <FaCode className="text-green-400 text-sm" />
                            <span className="text-sm text-gray-300">Problems Solved</span>
                          </div>
                          <span className="font-bold text-lg text-green-400">
                            {p.stats.totalSolved || 0}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-2">
                            <FaStar className="text-yellow-400 text-sm" />
                            <span className="text-sm text-gray-300">Reputation</span>
                          </div>
                          <span className="font-bold text-lg text-yellow-400">
                            {p.stats.reputation || 0}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-center p-4 rounded-lg bg-white/5">
                      <span className="text-sm text-gray-400">Click to view profile</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CP;
