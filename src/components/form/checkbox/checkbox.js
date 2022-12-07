import { memo } from "react";
import PropTypes from "prop-types";

const Checkbox = memo((props) => {
	const default_props = {
		id: props.id,
		name: props.name,
		disabled: props.disabled,
		onFocus: props.onFocus,
		onClick: props.onChange,
	};
	const { className, label, error, note, tooltip, checked } = { ...props };

	const showError = typeof error != "boolean" && error;

	let extraClass = "relative h-4 w-4 inline-block border";

	if (className) {
		extraClass += ` ${className}`;
	}
	if (checked) {
		extraClass += " bg-primary border-primary";
	}
	if (error) {
		extraClass += " border-danger bg-white ";
	} else {
		extraClass += " border-gray-light bg-white";
	}

	return (
		<div title={tooltip}>
			<button
				{...default_props}
				className={`flex items-center ${default_props.disabled ? "opacity-50" : null}`}
			>
				<span className={extraClass}>
					{checked ? (
						<svg
							viewBox="0 0 512 512"
							className="absolute top-1/2 left-1/2 -ml-1.5 -mt-1.5 h-3 w-3 fill-current text-black"
						>
							<path
								d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
			c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
			C514.5,101.703,514.499,85.494,504.502,75.496z"
							/>
						</svg>
					) : null}
				</span>
				<span className="ml-1 font-normal text-gray-500">{label}</span>
			</button>
			{error || note ? <div className="h-6">{showError ? <div className="text-xs text-danger">{error}</div> : note ? <div className="text-xs text-gray-medium">{note}</div> : null}</div> : null}
		</div>
	);
});
export default Checkbox;
Checkbox.propTypes = {
	disabled: PropTypes.bool,
	checked: PropTypes.bool /*checkbox state by default false*/,
	className: PropTypes.string /** Extra class for input  */,
	success: PropTypes.bool /** bool type default is false input type success  */,
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]) /** bool type default is false  */,
	onChange: PropTypes.func /*to change input state checked, unchecked function*/,
	label: PropTypes.string /** label on input string type */,
};
