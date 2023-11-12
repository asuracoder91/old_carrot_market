import type { NextPage } from "next";

const LiveDetail: NextPage = () => {
	return (
		<div className="px-4 py-10 space-y-4 ">
			<div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
			<h3 className="text-gray-800 text-2xl font-semibold mt-2">
				Let&apos;s try potatos
			</h3>
			<div className="py-10 pb-16 h-[50vh] px-4 space-y-4 overflow-y-scroll">
				<div className="flex items-start space-x-2">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<div>I want ￦20,000</div>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<div>I want ￦20,000</div>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<div>I want ￦20,000</div>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<div>I want ￦20,000</div>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<div>I want ￦20,000</div>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
					<div className="w-8 h-8 rounded-full bg-slate-400" />
					<div className="w-1/2 text-sm text-gray-700 p-2 border  border-gray-400 rounded-md">
						<div>I want ￦20,000</div>
					</div>
				</div>
			</div>
			<div className="flex relative items-center">
				<input
					type="text"
					className="shadow-sm w-full rounded-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-400"
				/>
				<div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
					<button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 cursor-pointer">
						&rarr;
					</button>
				</div>
			</div>
		</div>
	);
};

export default LiveDetail;
