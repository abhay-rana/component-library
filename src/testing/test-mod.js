import React from "react";

const TestMod = ({ show, setShow }) => {
	return (
		<>
			{/* renders this component onn the sibling of the root element where the root  */}
			{/* remove this component totally */}
			{/* add this component totally */}
			<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-row items-center justify-center border-2 border-red-600 bg-[#00000012]">
				<div className="w-1/2 border-2 border-black bg-white p-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut nisi minus qui ex enim vel placeat dignissimos voluptates? Architecto doloremque id delectus recusandae
					quaerat ut neque possimus repudiandae quia ex eum exercitationem reiciendis totam ipsa ipsum optio, molestiae, voluptas veniam doloribus voluptatum. Rerum consequatur doloribus vel
					eius facere! Veritatis libero fuga architecto voluptatum esse consectetur, quos recusandae eveniet magnam animi quidem harum totam ullam odio. Dignissimos ab, consectetur laborum
					laudantium amet commodi eum officiis asperiores, qui accusantium similique earum adipisci id recusandae atque! Ad, necessitatibus eveniet voluptas iure ratione beatae vel officiis
					libero, accusamus dolore voluptatem nesciunt nostrum mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur excepturi labore deleniti dolor aliquam
					quibusdam laboriosam sapiente quos, necessitatibus earum commodi possimus distinctio aspernatur nemo similique! Consequatur iste a voluptas expedita dignissimos, odio dolor,
					laborum eius voluptatibus corporis quibusdam placeat illo. Id vero totam, blanditiis nobis quasi unde, voluptatibus perspiciatis libero similique consequatur, iusto eos.
					Praesentium quae expedita quod aliquid cupiditate magni! Iste officia sed aspernatur voluptatum! Quibusdam aliquam suscipit laudantium quis repellat, ad deleniti voluptatum eum
					rerum expedita laborum, enim doloremque tempora cupiditate hic dicta eius aliquid nam itaque sequi? Nostrum dolor earum voluptas facilis dignissimos omnis in cum.
					<button
						onClick={() => setShow(!show)}
						className="border border-black p-2"
					>
						show and unShow
					</button>
				</div>
			</div>
		</>
	);
};

export default TestMod;
