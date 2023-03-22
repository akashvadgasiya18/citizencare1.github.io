import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProviderDetailPage from './ProviderDetailPage'
import ProviderEdit from './ProviderEdit'

const EditRoute = () => {
  return (
    <div className="PageContent" style={{ width: "auto" }}>
      <Routes>
        <Route exact path="/" element={<ProviderDetailPage />} />
        <Route exact path="/editProviderdetail" element={<ProviderEdit />}></Route>
      </Routes>
    </div>
  )
}

export default EditRoute
