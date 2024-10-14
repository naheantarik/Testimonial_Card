import React from "react";

const HeroSection = () => {
	return (
		<section className="bg-[#F5F5F5] mt-[164px]">
			<div className="bg-[#F4F6F5] rounded-[59px] py-[68px] px-[82px]">
				<div>
					<div className="pt-[77px]">
						<h1 className="font-Poppins uppercase text-[96px]">
							<span className="font-black before:bg-white before:absolute before:w-[calc(100%+100px)] before:h-full relative before:-z-10 z-10 before:top-0 before:bottom-0 before:-start-5 before:rotate-[177deg]">
								Let's
							</span>
							<br />
							<span>Explore</span>
							<br />
							<span>Unique</span>
							<br />
							<span>Clothes.</span>
						</h1>
					</div>
					<div>
						<p>Live for Influential and Innovative fashion!</p>
						<button>Shop Now</button>
					</div>
				</div>
				<div>
					<img src="" alt="" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
