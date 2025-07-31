import { MetaFunction } from "@remix-run/node";
import { LeaderboardWidget } from "@orderly.network/trading-leaderboard";
import { generatePageTitle } from "@/utils/utils";

export const meta: MetaFunction = () => {
  return [{ title: generatePageTitle("Leaderboard") }];
};

export default function MarketsPage() {
  return <LeaderboardWidget />;
}
