import { useAppDispatch, useAppSelector } from "@/app/hooks/useAppSelector"
import { selectAuth } from "@/features/LoginCard"
import { useEffect } from "react"
import {  selectChatHeader, fetchUserInfo } from "../slice";


const useGetAuthInfo = () => {
  const { ApiTokenInstance, IdInstance, wid } = useAppSelector(selectAuth)
  const { userAvatar } = useAppSelector(selectChatHeader)
  const dispatch = useAppDispatch()
 

  useEffect(() => {
    if (!IdInstance || !ApiTokenInstance || !wid) return;

    dispatch(fetchUserInfo({
      instance: IdInstance,
      token: ApiTokenInstance,
      wid,
    }))
   
  }, [dispatch, ApiTokenInstance, IdInstance, wid] )

  return { userAvatar }
}

export { useGetAuthInfo }