import React from "react";

import { useModalUpdater } from "provider/portal-provider";

import Button from "components/common/button";

import Modal from "components/modal/modal";

const UserModal = ({ id, ...rest }) => {
	const { toggleModal } = useModalUpdater();
	return (
		<>
			<Modal
				id={id}
				{...rest}
			>
				<div className="max-h-[600px] w-[500px] overflow-y-auto border-0 border-red-500 bg-white">
					<div>
						<div>hello abhay rana </div>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis quidem incidunt dolore. Accusamus velit id ullam esse! Soluta, assumenda quibusdam ipsam
							impedit quis, numquam ducimus perferendis in est earum at ut dignissimos nemo saepe? Possimus adipisci, beatae esse ea earum asperiores voluptatum minima, voluptate dolorem
							totam incidunt aliquid, laudantium ut delectus enim assumenda consequuntur dolor vitae tempore quas. Consequuntur in libero qui nulla nesciunt possimus facilis expedita
							vero doloribus eligendi saepe alias commodi, iusto ea aperiam deserunt ullam dolorem non, illum accusantium. Libero at molestias dicta. Porro tempore, consectetur nostrum
							voluptas laboriosam obcaecati ut facilis quae! Dignissimos iusto modi doloribus, neque possimus inventore repellat cupiditate suscipit ratione id repellendus minus, quidem
							quos blanditiis? At iure recusandae repellat enim fugit exercitationem magni, amet tempora corporis ipsum vel nostrum. Iusto optio vitae dolorum, blanditiis atque hic velit
							fugit quod commodi esse eius tempore repudiandae, modi similique sint doloremque cum vel consequatur iste voluptas cumque unde totam magnam facere! Ut in unde delectus
							sequi soluta, voluptas fugiat, aut ipsa ratione, eum numquam et aliquid dolor. Repellat laboriosam adipisci qui recusandae quos? At cum, eaque id odit sit libero
							consequatur. Recusandae nulla explicabo, voluptatibus ipsum tempore vitae consequatur, laboriosam sunt dicta, corrupti sit.
						</div>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit corrupti eum molestias doloremque fugiat possimus excepturi quisquam maiores ullam, velit,
							alias asperiores repellat sapiente doloribus tenetur laborum iste? Pariatur optio nam veniam reiciendis quod fugiat maxime quibusdam commodi incidunt eligendi similique
							iste qui mollitia obcaecati laudantium asperiores et dolorum cumque, atque tenetur ab nisi fugit. Est, accusamus laudantium ex accusantium cupiditate possimus earum in
							consequuntur rerum dicta optio officiis placeat esse molestiae alias, animi hic magnam ipsa eum ut, impedit atque. Consequatur in, ipsam quasi aperiam ad quibusdam vel
							nobis harum rerum rem nam, eveniet quae velit odio saepe.
						</div>
						<div>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nisi, reprehenderit minus id saepe perferendis repellat officia consequatur, laboriosam aliquam illum magnam
							repellendus. Nihil, praesentium? Iure alias veritatis iusto excepturi. Molestiae quae cumque ab debitis! Rem eius fugit reprehenderit nobis, autem nisi earum dicta amet
							natus assumenda molestias hic cum temporibus rerum inventore sit laudantium ab aut id animi. Ipsum doloremque et fuga nobis unde nesciunt, dolore, iusto quis vitae sit
							quibusdam asperiores neque quidem illo ad nihil consequuntur similique. Sapiente, reprehenderit sed! Neque doloribus tenetur molestiae necessitatibus, voluptatem amet
							provident quas debitis delectus modi dolor qui laboriosam quod quam?
						</div>
						<Button onClick={() => toggleModal.hide("user_modal")}>Close the modal</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default UserModal;
