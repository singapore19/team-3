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
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label
} from 'reactstrap';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
const apiKey = '**'

class MarkerList extends Component {
    constructor(props) {
      super(props);
      this.state = {locations: this.props.locations};
    }
  
    render() {
      return this.state.locations.map((location, index) => {
          return (
            <MarkerWithInfoWindow key={index.toString()} location={location}/>
          )
        }
      );
    }
  }
  
  class MarkerWithInfoWindow extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      const {location} = this.props;
  
      return (
        <Marker onClick={this.toggle} position={location} title={location.title} label={location.label}>
          {this.state.isOpen &&
          <InfoWindow onCloseClick={this.toggle}>
          </InfoWindow>}
        </Marker>
      )
    }
  }



const defaultZoom = 11;
let startLocation = { lat: 1.3459955, lng: 103.931223 }
let endLocation = { lat: 1.3399487, lng: 103.9161612 }
let defaultCenter = { lat: 1.3521, lng: 103.8198 };
const start_locations = [  {
    lat: 1.3459955,
    lng: 103.931223,
    label: 'Start',
    draggable: false,
    title: 'Stanford',
    www: 'https://www.stanford.edu/'
  }]

  const end_locations = [  {
    lat: 1.3399487,
    lng: 103.9161612,
    label: 'End',
    draggable: false,
    title: 'Stanford',
    www: 'https://www.stanford.edu/'
  }]

const StartGoogleMapsComponent = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap defaultZoom={defaultZoom} defaultCenter={startLocation}>
                    {<MarkerList locations={start_locations}/>}

        </GoogleMap>
    );
}
));

const EndGoogleMapsComponent = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap defaultZoom={defaultZoom} defaultCenter={endLocation}>
                    {<MarkerList locations={end_locations}/>}

        </GoogleMap>
    );
}
));

const url = "http://54.254.210.52:8080/api/v1/jobs/";
class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            name: "",
            contact: "",
            date: "",
            hour: 0,
            minute: 0,
            type: "",
            payload: 0,
            start_lat: 0,
            start_lng: 0,
            end_lat: 0,
            end_lng: 0,
            start_address: "",
            end_address: "",
            is_adhoc: false
        })

        this.submitForm = this.submitForm.bind(this)
        this.onInputChanged = this.onInputChanged.bind(this)
    }

    submitForm() {
        console.log(this.state)
        this.createJob()
    }

    onInputChanged(e) {
        e.preventDefault();
        let currentcomponent = this
        const target = e.target
        const value = target.value
        const name = target.name
        console.log(currentcomponent)
        currentcomponent.setState({
            [name]: value
        })
    }

    async createJob() {
        const body = {
            "name": this.state.name,
            "contact": this.state.contact,
            "date_delivery": this.state.date,
            "delivery_type": this.state.type,
            "end_address": this.state.end_address,
            "end_lat": endLocation.lat,
            "end_lng": endLocation.lng,
            "is_adhoc": this.state.is_adhoc,
            "payload": this.state.payload,
            "start_address": this.state.start_address,
            "start_lng": startLocation.lng,
            "start_lat": startLocation.lat,
            "time_delivery": this.state.hour + ":" + this.state.minute + ":00"
        }
        console.log(body)
        
        const result = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(body)
        })

        





    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="12">
                        <Card>
                            <CardHeader>
                                Submit Job request
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label htmlFor="name">Name</Label>
                                            <Input type="text" name="name" id="name-input" placeholder="Enter name" onChange={this.onInputChanged} required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label htmlFor="contact-input">Contact number</Label>
                                            <Input type="text" name="contact" id="contact-input" placeholder="Enter contact number" onChange={this.onInputChanged} required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label htmlFor="date-input">Date of job</Label>
                                            <Input type="date" id="date-input" name="date" placeholder="date" onChange={this.onInputChanged} />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label htmlFor="time-input">Time of job</Label>
                                            <Row>
                                                <Col xs="6" md="6">
                                                    <Input type="number" id="time-hour-input" name="hour" placeholder="hour" onChange={this.onInputChanged} />
                                                </Col>
                                                <Col xs="6" md="6">
                                                    <Input type="number" id="time-minute-input" name="minute" placeholder="min" onChange={this.onInputChanged} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label htmlFor="type-input">Type of job</Label>
                                            <Input type="select" id="type-input" name="type" placeholder="Type of job. " onChange={this.onInputChanged}>
                                                <option key="d" value="documents">Documents</option>
                                                <option key="g" value="goods">Goods</option>
                                                <option key="p" value="personnels">Pesonnels</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label htmlFor="date-input">Trip Payload</Label>
                                            <Input type="number" id="payload-input" name="payload" placeholder="no. of seats" onChange={this.onInputChanged} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label htmlFor="start-input">Start Address</Label>
                                        </FormGroup>
                                        <Card>
                                            <CardHeader>
                                                <FormGroup>
                                                    <Input type="text" id="start-input" name="start_address" placeholder="pick up address" onChange={this.onInputChanged} />
                                                </FormGroup>
                                            </CardHeader>
                                            <CardBody>
                                                <StartGoogleMapsComponent
                                                    key="map"
                                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
                                                    loadingElement={<div style={{ height: `100%` }} />}
                                                    containerElement={<div style={{ height: `400px` }} />}
                                                    mapElement={<div style={{ height: `100%` }} />}
                                                />
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label htmlFor="date-input">End Address</Label>
                                        </FormGroup>
                                        <Card>
                                            <CardHeader>
                                                <FormGroup>
                                                    <Input type="text" id="end-input" name="end_address" placeholder="drop off address" onChange={this.onInputChanged} />
                                                </FormGroup>
                                            </CardHeader>
                                            <CardBody>
                                                <EndGoogleMapsComponent
                                                    key="map"
                                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
                                                    loadingElement={<div style={{ height: `100%` }} />}
                                                    containerElement={<div style={{ height: `400px` }} />}
                                                    mapElement={<div style={{ height: `100%` }} />}
                                                />
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col md="12">
                                        <Button className="float-right btn-success" onClick={this.submitForm}>add</Button>

                                    </Col>

                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>)
    }
}

export default Staff