Meteor.publish("emails",function () {
	return Meteor.users.find({}, {fields: {'emails': 1} });
});
Meteor.publish("justelecas",function () {
	return Justelecas.find();
});
