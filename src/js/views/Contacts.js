import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const [idDelete, setId] = useState({ id: "" });

	useEffect(() => {
		actions.getContacts();
	}, []);

	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<p className="text-right my-3">
				<Link className="btn btn-success" to="/add">
					Add new contact
				</Link>
			</p>
			<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
				<ul className="list-group pull-down" id="contact-list">
					{store.contacts.map((each, i) => {
						return (
							<ContactCard
								onDelete={() => {
									setState({ showModal: true });
									setId({ id: each.id });
								}}
								data={each}
								key={i}
								id={each.id}
							/>
						);
					})}
				</ul>
			</div>
			<Modal show={state.showModal} id={idDelete.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
