import type { NextPage } from "next";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
	return (
		<Layout hasTabBar title="채팅">
			<div className="py-10 divide-y-2">
				{[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
					<div
						key={i}
						className="flex px-4 cursor-pointer py-3 border-b items-center space-x-3"
					>
						<div className="w-12 h-12 rounded-full bg-slate-300" />
						<div>
							<p className="font-medium text-gray-700">
								Steve Jebs
							</p>
							<p className="text-sm font-medium text-gray-500">
								See you tomorrow in the corner at 2pm!
							</p>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Chats;
