import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import '../../Pages/SharedPages/DefaultCss/DefaulCss.css'
import Loding from '../Loding/Loding'
import ShowAdd from './ShowAdd/ShowAdd'
import UseractiveCard from './UseractiveCard'

const Rightsidebar = () => {
  const { data: currentUser, isLoading, refetch } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const res = await fetch('https://dailyface-server.vercel.app/alluser')
      const data = res.json()
      return data
    },
  })

  if (isLoading) {
    return <Loding></Loding>
  }

  return (
    <div className="px-4 rightSidebar mt-3">
      {/* ===advertise=== */}
      <div className="font-semibold text-base-400 text-md ">Sponsored</div>
      <div>
        <ShowAdd />
      </div>
      <hr />
      {/* ===friend request==== */}
      <div className="mb-4">
        <div className="flex justify-between">
          <h3 className="font-semibold text-base-400 text-lg ">
            Friend request
          </h3>
          <p>See all</p>
        </div>
        <div className="card card-side">
          <div className="mt-8 ml-4">
            <div className="rounded-full ring ring-primary ring-offset-base-100 w-12 ring-offset-2">
              <img
                className="rounded-full"
                src="https://placeimg.com/192/192/people"
                alt=""
              />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Md Shahed Mrihda</h2>
            <p className="flex">
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </div>
              Menual friend
            </p>
            <div className="card-actions">
              <button className="btn btn-info btn-md text-white">
                Confirm
              </button>
              <button className="btn btn-active btn-ghost btn-md">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>{' '}
      <hr />
      {/* ===Contact==== */}
      <div>
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold text-base-400 text-lg ">Contact</h3>
          <p className="text-lg pt-3">
            <AiOutlineSearch />
          </p>
        </div>
      </div>
      {/* ====user==== */}
      <div>
        {currentUser?.map((user) => (
          <UseractiveCard key={user._id} alluser={user}></UseractiveCard>
        ))}
      </div>
    </div>
  )
}

export default Rightsidebar
