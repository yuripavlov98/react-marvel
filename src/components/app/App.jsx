import { lazy, Suspense } from "react";
import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "../spinner/Spinner";


const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = lazy(() =>
	import("../pages/SingleComicPage/SingleComicPage")
);
const SingleCharacterLayout = lazy(() => import('../pages/SingleCharPage/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
	return (
		<BrowserRouter>
			<div className='app'>
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='/comics' element={<ComicsPage />} />
							<Route
								path='/comics/:id'
								element={<SinglePage Component={SingleComicPage} dataType='comic' />}
							/>
							<Route
								path='/characters/:id'
								element={<SinglePage Component={SingleCharacterLayout} dataType='character' />}
							/>
							<Route path='*' element={<Page404 />} />
						</Routes>
					</Suspense>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
