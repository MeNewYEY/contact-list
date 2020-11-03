import React, { useContext, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";

export const editContact = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();
	const { id } = useParams();

	const onSubmit = data => {
		store.contacts.map(each => {
			if (each.id == id) {
				Object.entries(data).map(([key, value]) => {
					key == "full_name" && value != "" ? (each.full_name = value) : "";
					key == "email" && value != "" ? (each.email = value) : "";
					key == "phone" && value != "" ? (each.phone = value) : "";
					key == "address" && value != "" ? (each.address = value) : "";
				});
				actions.editContact(each);
			}
		});
	};
	return (
		<div>
			{store.contacts.map(each => {
				return each.id == id ? (
					<div className="container">
						<div>
							<h1 className="text-center mt-5">Edit Contact - {each.full_name} </h1>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-group">
									<label>Full Name</label>
									<input
										type="text"
										className="form-control"
										placeholder={each.full_name}
										name="full_name"
										ref={register}
									/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input
										type="email"
										className="form-control"
										placeholder={each.email}
										name="email"
										ref={register}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										type="phone"
										className="form-control"
										placeholder={each.phone}
										name="phone"
										ref={register}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										type="text"
										className="form-control"
										placeholder={each.address}
										name="address"
										ref={register}
									/>
								</div>

								<button type="submit" className="btn btn-primary form-control">
									Update Contact
								</button>

								<Link className="mt-3 w-100 text-center" to="/">
									or get back to contacts list
								</Link>
							</form>
						</div>
					</div>
				) : (
					""
				);
			})}
		</div>
	);
};
