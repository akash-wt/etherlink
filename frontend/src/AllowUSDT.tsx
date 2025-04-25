import { useWriteContract } from 'wagmi'
import { ABI } from './abi';

export function AllowUSDT() {
  const { data: hash, writeContract } = useWriteContract()

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    writeContract({
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      abi: ABI,
      functionName: 'approve',
      args: ["0x2966473D85A76A190697B5b9b66b769436EFE8e5", BigInt(1000000)],
    })
  }

  return (
    <form onSubmit={submit}>
      <input name="tokenId" placeholder="69420" required />
      <button type="submit">Approve</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  )
} 