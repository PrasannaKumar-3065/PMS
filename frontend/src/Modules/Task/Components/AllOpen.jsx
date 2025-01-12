import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import { useSpring, animated } from "@react-spring/web";


// const SlideToggle = require("react-slide-toggle");


const AllOpen = () =>{
    const [isoFormFlag, setFormFlag] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);
    const styles = useSpring({
        to: { height: isVisible ? contentRef.current?.scrollHeight : 0 },
        from: { height: 0 },
        config: { duration: 300 },
      });
    const handleToggle = () => {
        setIsVisible((prev) => !prev)
    };
    const options = [
        { value: '1', label: 'Assigned' },
        { value: '2', label: 'In Progress' },
        { value: '3', label: 'Pending' },
        { value: '4', label: 'On Hold' },
        { value: '5', label: 'Rejected' },
        { value: '6', label: 'Completed' },
        { value: '7', label: 'Closed' }
      ]
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    return(
        <>
            <div class="container-fluid row">
                <div class="col-lg-12 col-md-12">
                    <Button onClick={handleToggle}>Create Task</Button>
                    <animated.div style={{ ...styles, overflow: "hidden" }} ref={contentRef}>
                        <Form className="">
                            <h1>Status</h1>
                            <h1/>
                            <Form.Group>
                            <div className='row'>
                                <div className='col-md-6 mb-2'><label for="isoTaskStatus" class="form-label">Status</label></div>
                                    <Select
                                        className="col-md-6 mb-2 basic-single form-control" 
                                        classNamePrefix="select"
                                        isDisabled={isDisabled}
                                        isLoading={isLoading}
                                        isClearable={isClearable}
                                        isRtl={isRtl}
                                        isSearchable={isSearchable}
                                        name="color"
                                        options={options}
                                        id='isoTaskStatus'
                                    />
                            </div>
                            <div className='row'>
                                <div className='col-md-6 mb-2'><label for="isoProjectName" class="form-label">Status</label></div>
                                    <Select
                                        className="col-md-6 mb-2 basic-single form-control" 
                                        classNamePrefix="select"
                                        isDisabled={isDisabled}
                                        isLoading={isLoading}
                                        isClearable={isClearable}
                                        isRtl={isRtl}
                                        isSearchable={isSearchable}
                                        name="color"
                                        options={options}
                                        id='isoTaskStatus'
                                    />
                            </div>
                            </Form.Group>
                        </Form>
                    </animated.div>
                </div>
                <div class="col-lg-12 col-md-12">
                </div>
            </div>

        </>
    )
}

export default AllOpen