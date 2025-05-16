import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";

const UserEnrollment = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/enrolled-courses/${userId}`);
                setEnrolledCourses(response.data.enrolledCourses || []);
            } catch (error) {
                console.error("Error fetching enrolled courses:", error);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchEnrolledCourses();
        }
    }, [userId]);

    return (
        <>
            <Navbar />
                 <h2 className="text-center mb-4">My Enrolled Courses</h2>

            <Container className="my-4">
                <div>
                    
                </div>
                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                ) : enrolledCourses.length === 0 ? (
                    <Alert variant="info" className="text-center">
                        You haven't enrolled in any courses yet.
                    </Alert>
                ) : (
                    <Row>
                        {enrolledCourses.map((course, index) => (
                            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
                                <Card className="h-100 shadow-sm">
                                    <Card.Body>
                                        <Card.Title>{course.courseTitle}</Card.Title>
                                        {/* <Card.Text>
                                            <strong>Enrolled on:</strong><br />
                                            {new Date(course.enrollmentDate).toLocaleDateString()}
                                        </Card.Text> */}
                                        <Button variant="success" disabled>
                                            Enrolled
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </>
    );
};

export default UserEnrollment;
