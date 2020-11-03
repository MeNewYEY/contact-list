import React, { useState, useEffect, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={() => props.onClose()}>
							Oh no!
						</button>
						<Link to="/">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={() => {
									props.onClose();
									actions.deleteContact(props.id);
								}}>
								Do it!
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.any
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
