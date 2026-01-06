import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

// Input Field Component
const InputField = ({ type, placeholder, name, handlerChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
    onChange={handlerChange}
    type={type}
    placeholder={placeholder}
    name={name}
    value={address[name]}
    required
  />
)

const AddAddress = () => {
  const { axios, user, navigate } = useAppContext()

  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    city: '',
    street: '',
    state: '',
    country: '',
    zipCode: '',
    phone: '',
    email: '',
  })

  const handlerChange = e => {
    const { name, value } = e.target
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value,
    }))
  }

  const onSubmitHandler = async e => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/address/add', { address })
      if (data.success) {
        toast.success(data.message)
        navigate('/cart', { state: { refetch: true } })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // ✅ FIXED BUG HERE
  useEffect(() => {
    if (user === undefined) return // wait until user loads

    if (!user) {
      toast.error('Please login to add address')
      navigate('/cart')
    }
  }, [user, navigate])

  return (
    <div className="mt-16 pb-16">
      <button
        onClick={() => navigate('/cart')}
        className="group cursor-pointer flex items-center mb-6 gap-2 text-primary font-medium"
      >
        <img
          className="group-hover:-translate-x-1 transition rotate-180"
          src={assets.arrow_right_icon_colored}
          alt="arrow right icon colored"
        />
        Back to Cart
      </button>

      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputField handlerChange={handlerChange} address={address} name="firstName" type="text" placeholder="First Name" />
              <InputField handlerChange={handlerChange} address={address} name="lastName" type="text" placeholder="Last Name" />
            </div>

            <InputField handlerChange={handlerChange} address={address} name="email" type="email" placeholder="Email Address" />
            <InputField handlerChange={handlerChange} address={address} name="street" type="text" placeholder="Street Address" />

            <div className="grid grid-cols-2 gap-4">
              <InputField handlerChange={handlerChange} address={address} name="city" type="text" placeholder="City" />
              <InputField handlerChange={handlerChange} address={address} name="state" type="text" placeholder="State" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField handlerChange={handlerChange} address={address} name="zipCode" type="number" placeholder="Zip Code" />
              <InputField handlerChange={handlerChange} address={address} name="country" type="text" placeholder="Country" />
            </div>

            <InputField handlerChange={handlerChange} address={address} name="phone" type="text" placeholder="Phone Number" />

            <div className="mt-6">
              <button type="submit" className="w-full py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition">
                Save Address
              </button>
            </div>
          </form>
        </div>

        <img
          className="md:mr-16 mb-16 md:mt-0"
          src={assets.add_address_image}
          alt="add address image"
        />
      </div>
    </div>
  )
}

export default AddAddress
