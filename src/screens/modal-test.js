import React from "react";

import { useModalUpdater } from "provider/portal-provider";

import UserModal from "./user-modal";

import Button from "components/common/button";

const ModalTest = () => {
	const { toggleModal } = useModalUpdater();

	const runThis = () => {
		console.log("run this on unmounting");
	};

	return (
		<>
			<div className="border-2 border-red-300">Header</div>
			<div>
				<Button onClick={() => toggleModal.show("user_modal")}>Show the user modal</Button>
				<Button onClick={() => toggleModal.hide("user_modal")}>hide the user modal</Button>
			</div>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aliquam provident animi asperiores tempore inventore. Fugit recusandae a itaque adipisci optio? Sed animi recusandae
				ullam corporis aut illo, quam ab iusto! Odit architecto enim minima, exercitationem ducimus sapiente quibusdam molestias minus gnissimos, pariatur perferendis explicabo qui minus,
				facilis eius dolorum voluptates maiores impedit porro cumque corrupti. Iure esse, porro quibusdam voluptatibus ipsam mollitia culpa qui perferendis explicabo? Vitae mollitia hic
				eveniet illum maxime deleniti iusto quidem consequatur, quisquam error, ad doloribus sit nesciunt quis qui. Ex nam mollitia culpa eligendi minus ut amet quas doloribus incidunt eius
				quos soluta, assumenda modi sit numquam quidem corporis quo magni aut ullam. Quia odit veniam, neque pariatur a iure. Commodi cupiditate cum consectetur, fuga eos praesentium,
				<Button onClick={() => toggleModal.show("user_modal")}>Show the user modal</Button>
				<Button onClick={() => toggleModal.hide("user_modal")}>hide the user modal</Button>deserunt quibusdam veritatis porro numquam maiores dolor aut deleniti soluta necessitatibus? Corrupti
				natus dignissimos iure provident nihil in temporibus dolores officiis eos nobis sed, amet suscipit ad architecto consequatur incidunt? Velit, laudantium voluptatibus? Hic quasi
				repellat fuga obcaecati maiores laboriosam voluptas? Eos magnam qui natus quis ipsum quae voluptate reprehenderit doloribus itaque! Debitis, totam. Reiciendis corrupti ipsum, delectus
				optio velit obcaecati saepe qui et sequi cumque, eaque deleniti nisi similique ex inventore modi dicta debitis explicabo dolorum porro labore. Adipisci dolor voluptates provident et
				aperiam consequatur qui consequuntur, soluta quidem at blanditiis quo sed sunt corrupti beatae veritatis cum necessitatibus pariatur eos. Tempora quia architecto numquam assumenda eos
				blanditiis sequi, dignissimos doloribus eius, aliquid quas. Inventore facilis voluptatem eveniet fugiat cum eius cupiditate veritatis atque excepturi repellendus magni quaerat, et
				consectetur vel maxime aut cumque enim pariatur similique dolorem numquam fugit ex natus. Tenetur cum ad id nulla saepe doloremque perspiciatis cumque maiores mollitia voluptates iusto
				temporibus sequi provident pariatur velit ratione, fuga libero recusandae? Magni vitae ipsa, natus a nihil ut tempore. Magni amet quo, ratione iure corrupti nihil commodi obcaecati eum
				inventore quis facere quas pariatur modi perspiciatis, expedita delectus minus quibusdam non! Magni eveniet vero nesciunt quis pariatur. Explicabo incidunt at eveniet veniam quasi
				accusantium aperiam voluptatibus ratione magni! Esse ab illum ipsam officia molestiae, fugiat sequi ex pariatur consectetur tempora eos atque vero aspernatur distinctio ea vel quaerat
				nihil, doloribus odio cumque ullam vitae dolor facere! Ullam, non ad natus repellat pariatur reprehenderit sequi ratione neque quasi? Ad distinctio, reiciendis officiis qui animi vero
				consequuntur quasi eius, atque odit aspernatur eum ex et repudiandae eaque? Voluptate quod voluptatum ipsum doloribus ullam, quia quis sequi corrupti modi ex enim aliquid. Harum
				reiciendis ad iure, debitis, sunt sed asperiores quod a ipsam atque voluptates aperiam. Optio ipsam reiciendis aut nobis animi veritatis aspernatur, sint rem temporibus ipsum nisi?
				Libero quia a vel deserunt velit, accusamus, magni rerum eum quibusdam voluptates, consequatur quis minima voluptatibus ipsum.
			</div>

			<UserModal
				id="user_modal"
				onClose={runThis}
				closeButton
				closeOnEscapeKey
				clickOutsideClose
				scrollLock={true}
			/>
		</>
	);
};

export default ModalTest;
