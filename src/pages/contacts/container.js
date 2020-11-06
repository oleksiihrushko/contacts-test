import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = null;

const PageContacts = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { PageContacts };
