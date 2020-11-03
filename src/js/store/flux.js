const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},

		actions: {
			addNewContact: newContact => {
				try {
					fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							full_name: newContact.full_name,
							email: newContact.email,
							agenda_slug: "yahilyn",
							address: newContact.address,
							phone: newContact.phone
						})
					});
				} catch (error) {
					console.log(error);
				}
			},
			updateContact: (id, full_name, email, agenda_slug, address, phone) => {},

			deleteContact: async id => {
				try {
					const url = `https://assets.breatheco.de/apis/fake/contact/${id}`;
					const response = await fetch(url, {
						method: "DELETE"
					});
					window.location.reload(false);
				} catch (error) {
					console.log(error);
				}
			},

			getContacts: async () => {
				try {
					const url = "https://assets.breatheco.de/apis/fake/contact/agenda/yahilyn";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ contacts: data });
				} catch (error) {
					console.log(error);
				}
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
