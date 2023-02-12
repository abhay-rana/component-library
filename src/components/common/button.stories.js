import Button from "./button";

export default {
	title: "Button",
	component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const primary = Template.bind({});
primary.args = {
	primary: true,
	loader: true,
	block: true,
	disabled: true,
};
