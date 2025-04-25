import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { ABI } from "./abi";


export default function TotalSupply() {
    const { address } = useAccount();
    console.log(address);

    const { data, error, isLoading } = useReadContract({
        abi: ABI,
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        functionName: 'totalSupply'
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <div>Total Supply: {data?.toString()}</div>;
}