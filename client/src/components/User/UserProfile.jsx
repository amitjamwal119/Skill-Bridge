import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Navbar from "../../components/Navbar";
import Footer from '../Footer';

export const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  console.log("image",image)
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const goback = () => {
    navigate('/home');
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
          
          const data = response.data;
          setUser(data);

          reset({

            phone: data.phone || '',
            dob: data.dob ? data.dob.slice(0, 10) : '',
            gender: data.gender || '',
            occupation: data.occupation || '',
            profileImage: data.profileImage || ''
          });
            // console.log("reeeeessss",response)
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };

    fetchUser();

  }, [reset]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  
  };

  const handleImageUpload = async () => {
    const userId = localStorage.getItem('userId');
    if (!image) {
      alert('Please select an image first.');
      return;
    }
    const imageData = new FormData();
    imageData.append('profileImage', image);

    try {
      const img = await axios.post(`http://localhost:5000/api/users/${userId}/upload-image`, imageData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // console.log("imgggg",img);
if(img){

  await axios.put(`http://localhost:5000/api/users/${userId}`, {profileImage:img.data?.image})
}

      alert('Image uploaded successfully!');
      // Re-fetch user data to show new image
      const updatedUser = await axios.get(`http://localhost:5000/api/users/${userId}`);
      setUser(updatedUser.data);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Image upload failed.');
    }
  };

  const onSubmit = async (formData) => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}`, {...formData});
      alert('User profile updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Error updating user profile.');
    }
  };

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center">
        <Row>
          <Col lg={12}>
            <Card style={{ width: "500px", margin: "20px 0" }}>
              <Card.Body>
                <Card.Title>User Profile</Card.Title>
                {/* {JSON.stringify(user)} */}
                {user ? (
                  <>
                    <h2>Welcome, <strong>{user.name}</strong></h2>
                    <p><strong>Email:</strong> {user.email}</p>

                    
                    {user.profileImage && (
                      <div className="img-class">
                          <img
                        src={`http://localhost:5000/uploads/${user.profileImage}`}
                        alt="Profile"
                        width="120px"
                        className="mb-3 rounded"
                      />
                      </div>
                      
                    )}


                      <input type="file" className='file-upload' onChange={handleImageChange} />
                      <Button className='upload-Image' onClick={handleImageUpload}>
                        Upload Image
                      </Button>
                    
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter phone number"
                          {...register('phone', { required: true })}
                        />
                        {errors.phone && <small className="text-danger">Phone number is required</small>}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          {...register('dob', { required: true })}
                        />
                        {errors.dob && <small className="text-danger">Date of birth is required</small>}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select {...register('gender', { required: true })}>
                          <option value="">Select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                        {errors.gender && <small className="text-danger">Gender is required</small>}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter occupation"
                          {...register('occupation', { required: true })}
                        />
                        {errors.occupation && <small className="text-danger">Occupation is required</small>}
                      </Form.Group>

                      <Button type="submit" variant="primary">Update Profile</Button>
                    </Form>
                  </>
                ) : (
                  <p>Loading user data...</p>
                )}
                <Button className="mt-3" variant="secondary" onClick={goback}>Go Back</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
