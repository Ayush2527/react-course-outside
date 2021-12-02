import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateUser } from 'services/requests/profile';
type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
};
function Profile() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (_data) => {
    const response = await updateUser({
      firstname: firstname,
      lastname: lastname,
      email: email,
    });
    if (response) {
      alert('Successfully Logged In');

      return;
    }
    alert('Login Failed!');
  };
  return (
    <div className="min-h-screen bg-grey-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto text-white text-center">Profile</div>
      <div className="max-w-md w-full mx-auto bg-white p-2 border border-red-600">
        <form action="" className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstname" className="text-sm font-bold text-grey-600 block">
              First Name
            </label>
            <input
              {...register('firstname', { required: true })}
              id="firstname"
              type="text"
              className="w-full p-0.9 border border-grey-300 rounded mt-0.8 "
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastname" className="text-sm font-bold text-grey-600 block">
              last Name
            </label>
            <input
              {...register('lastname', { required: true })}
              id="lastname"
              type="text"
              className="w-full p-0.9 border border-grey-300 rounded mt-0.8"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-bold text-grey-600 block">
              Email
            </label>
            <input
              {...register('email', { required: true })}
              id="email"
              type="text"
              className="w-full p-0.9 border border-grey-300 rounded mt-0.8"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-0.8 px-2 bg-blue-600 hover-bg-blue-700 rounded-md text-white text-sm text-center"
            >
              Click
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Profile;
