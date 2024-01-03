import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { api } from '@/api';
const OauthCallback = () => {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState('');
    const code = searchParams.get('code'); // test
    const { oauth } = useParams();
    useEffect(() => {
        async function getData() {
            try {
                const resp = await api.get('http://localhost:8080/oauth/github/callback?code=' + code);
                console.log(resp.data);
            } catch (e) {
                console.log(e);
            }
        }
        getData();
    }, []);
    return (
        <div>
            {data}
            {/* 1222 */}
        </div>
    );
};

export default OauthCallback;
