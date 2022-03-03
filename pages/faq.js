import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
    return (
        <div className="faq_wrapper my-5">
            <div className="faq_text px-5">
                <h1>Frequently Asked Questions</h1>
                <p>
                    Didn&apos;t find the Answer you were looking for? Visit our{" "}
                    <a href="/package">Help Center</a> or{" "}
                    <a href="/package">Contact Support</a>
                </p>
            </div>
            <div className="faq_question">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Can I install by New Packages by Myself?
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vel consectetur facilisis at aenean. Molestie
                            id tortor lobortis leo gravida cursus ridiculus at
                            amet. Libero donec ac lectus sed nisl semper laoreet
                            diam. Mi libero nulla magna imperdiet. Odio sed
                            lectus elementum elit. Eu sagittis duis interdum
                            massa et mattis congue.{" "}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Question</Accordion.Header>
                        <Accordion.Body>Answer</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Question</Accordion.Header>
                        <Accordion.Body>Answer</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Question</Accordion.Header>
                        <Accordion.Body>Answer</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
