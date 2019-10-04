import React, { Component } from "react";
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
} from 'reactstrap';

class Admin extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="animated fadeIn panel">
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white">
                            <CardHeader>
                                <Button className="float-right btn-success">add</Button>
                            </CardHeader>
                            <CardBody className="pb-0">

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>)
    }
}

export default Admin