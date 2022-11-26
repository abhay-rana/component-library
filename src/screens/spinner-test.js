import React from "react";
import Spinner from "components/common/spinner";

const SpinnerTest = () => {
	return (
		<>
			<div className="flex h-full flex-col gap-2">
				<header className="">
					<div className=" p-4 text-center">SpinnerTest</div>
				</header>
				<section className="flex grow flex-col gap-y-8">
					<div className="flex flex-row">
						<div className="flex basis-24 items-center justify-center">Basic</div>
						<div className="flex flex-1">
							<div className="mx-2 border border-black p-2">
								<Spinner />
								<p>default</p>
							</div>
							<div className="mx-2 border border-black p-2">
								<Spinner small />
								<p>small</p>
							</div>
							<div className="mx-2 border border-black p-2">
								<Spinner large />
								<p>large</p>
							</div>
							<div className="mx-2 border border-black p-2">
								<Spinner primary />
								<p>primary</p>
							</div>
							<div className="mx-2 border border-black p-2">
								<Spinner warning />
								<p>warning</p>
							</div>
							<div className="mx-2 border border-black p-2">
								<Spinner
									danger
									default
								/>
								<p>danger</p>
							</div>
							<div className="mx-2 border border-black p-2">
								<Spinner success />
								<p>success</p>
							</div>
							<div className="mx-2 border border-black p-2">
								<Spinner light />
								<p>light</p>
							</div>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex basis-24 items-center justify-center">Advance</div>
						<div>
							<div className="mx-2 border border-black p-2">
								<Spinner className="text-blue-800" />
								<p>custom color</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default SpinnerTest;
