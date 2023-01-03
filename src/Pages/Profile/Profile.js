import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Authcontext } from '../../Authprovider/Authprovide'
import '../SharedPages/DefaultCss/DefaulCss.css'
import { AiFillEdit } from 'react-icons/ai'
import UserInfoEdit from '../Sidebar/Modal/UserInfoEdit'
import Loding from '../Loding/Loding'

const Profile = () => {
  const { user } = useContext(Authcontext)

  const { data: userProfile, isLoading, refetch } = useQuery({
    queryKey: ['userProifle'],
    queryFn: async () => {
      const res = await fetch(
        ` https://dailyface-server.vercel.app/user?email=${user?.email}`,
      )
      const data = res.json()
      return data
    },
  })

  if (isLoading) {
    return <Loding></Loding>
  }

  return (
    <div>
      <section>
        <div
          className=" h-56"
          style={{
            backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
          }}
        >
          <div className="flex justify-end ">
            <button className="btn btn-active btn-ghost text-white">
              Edit cover Photo
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-base-100">
          <div className=" userimage w-full flex justify-center">
            <img
              className="rounded-full w-48 userProfile"
              src={user?.photoURL}
              alt="profile"
            />
          </div>
          <div className="text-center py-5">
            <h3 className="text-3xl font-bold">{user?.displayName}</h3>

            {/* avtar */}
            <div className="avatar-group -space-x-6 flex justify-center py-3">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" alt="..." />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" alt="..." />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" alt="..." />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral-focus text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold  pb-2">
              Email : {user?.email}
            </h3>
            <h3 className="text-lg font-semibold  pb-2">
              City : {userProfile?.city}
            </h3>
            <h3 className="text-lg font-semibold  pb-2">
              Eductaion : {userProfile?.education}
            </h3>

            <label
              htmlFor="updetUserInfo"
              className="btn btn-active btn-ghost my-2 text-green-700"
            >
              <AiFillEdit />
              <span className="pl-2">Edit Profile</span>
            </label>
          </div>
        </div>
      </section>
      <UserInfoEdit userOldInfo={userProfile} refetch={refetch}></UserInfoEdit>

      {/* postbar */}
      <div>
        <div className="bg-white p-4 mt-3 shadow-sm rounded-md">
          <div className="flex items-center">
            <div className="w-24">
              <img className="w-14 rounded-full" src={user?.photoURL} alt="" />
            </div>
            <div className="w-full bg-[#f3f4f4] rounded-xl py-2 pl-4">
              <label
                className="w-full text-gray-500 text-lg"
                htmlFor="postmodal"
              >
                What's on your mind {user?.displayName} ?
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
