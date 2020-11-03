const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},

		actions: {
			addNewContact: async newContact => {
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
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
					window.location.href = "../";
				} catch (error) {
					console.log(error);
				}
			},
			editContact: async each => {
				try {
					const url = `https://assets.breatheco.de/apis/fake/contact/${each.id}`;
					const response = await fetch(url, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							full_name: each.full_name,
							email: each.email,
							agenda_slug: "yahilyn",
							address: each.address,
							phone: each.phone
						})
					});
					window.location.href = "../";
				} catch (error) {
					console.log(error);
				}
			},

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
