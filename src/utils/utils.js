import * as anchor from '@project-serum/anchor'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { TIKTOK_IDL, TIKTOK_PROGRAMID} from './const'
// anchor.utils.bytes.utf8
export function getProgramInstance(connection, wallet) {
    if(!wallet.publicKey) throw new WalletNotConnectedError()

    const provider = new anchor.Provider(
        connection,
        wallet,
        anchor.Provider.defaultOptions()
    )

    const idl = TIKTOK_IDL

    const programID = TIKTOK_PROGRAMID

    const program = new(anchor).Program(idl, programID, provider)

    return program
}