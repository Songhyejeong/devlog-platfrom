import { GlobalStyle } from '@styles';
import { useDarkModeStore } from './store';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { MainLayout } from './components/common';
import { NotFound, Main, Signup, OauthCallback, MyPage, MyPagePost, MyPageIntro, MyPageList, SetUp } from './pages';
import PostWrite from './pages/PostWrite';

// 테마 정의
const DarkTheme = {
    body: '#121212',
    text: '#FAFAFA',
    // 기타 다크 테마 스타일...
};

const LightTheme = {
    body: '#FFF',
    text: '#363537',
    // 기타 라이트 테마 스타일...
};

const GlobalContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
`;

function App() {
    const { darkMode } = useDarkModeStore();
    return (
        <>
            <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
                <GlobalStyle />
                <GlobalContainer>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route path="/" element={<Main />} />
                            <Route path="/my" element={<MyPage />}>
                                <Route path="/my/list" element={<MyPageList />} />
                                <Route path="/my/post" element={<MyPagePost />} />
                                <Route path="/my/intro" element={<MyPageIntro />} />
                            </Route>
                            <Route path="/set" element={<SetUp />} />
                        </Route>
                        <Route path="/write" element={<PostWrite />} />
                        <Route path="/oauth/callback/:oauth" element={<OauthCallback />} />
                        <Route path="/*" element={<NotFound />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </GlobalContainer>
            </ThemeProvider>
        </>
    );
}

export default App;
