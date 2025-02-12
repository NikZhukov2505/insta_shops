import React, { FC, useEffect } from 'react'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Profile from '../../pages/Profile/Profile'
import DetailView from '../../pages/DetailView/DetailView'
import PersonalProfile from '../../pages/PersonalProfile/PersonalProfile'
import AddingProduct from '../../pages/AddingProduct/AddingProduct'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { getAllStores } from '../../store/slice/storesSlice'
import { getLSToken } from '../../LS'
import { fetchByToken, setToken } from '../../store/slice/userSlice'
import ChangeUserProfile from '../../pages/ChangeUserProfile/ChangeUserProfile'

const Main: FC = () => {
	const [searchParams] = useSearchParams()
	const dispatch = useAppDispatch()
	const { token, reboot, login } = useAppSelector(state => state.user)

	useEffect(() => {
		let lsToken = getLSToken()
		if (lsToken !== null && lsToken !== undefined) {
			dispatch(setToken(lsToken))
		}
	}, [dispatch])

	useEffect(() => {
		if (token) {
			dispatch(fetchByToken(token))
		}
	}, [dispatch, token, reboot, login])

	useEffect(() => {
		!searchParams.get('c') && dispatch(getAllStores())
	}, [dispatch, searchParams.get('c')])

	return (
		<main className='container'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detailview/:id/:shop' element={<DetailView />} />
				<Route path='/profile/:id/:store_name' element={<Profile />} />
				{
					token && <>
						<Route path='/personal_profile' element={<PersonalProfile />} />
						<Route path='/adding_product' element={<AddingProduct />} />
						<Route path='/change_user_profile' element={<ChangeUserProfile />} />
					</>
				}
				{/* <Route path='*' element={<div>Oops page not found!</div>} /> */}
			</Routes>
		</main>
	)
}

export default Main
