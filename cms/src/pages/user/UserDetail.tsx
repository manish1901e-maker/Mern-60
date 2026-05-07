import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { type AppDispatch, type RootState } from "../../lib/store/store";
import { getUserDetail } from "../../lib/reducer/UserReducer";
import type { IUserData } from "../../lib/types/AuthType";

export default function UserDetail() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const userDetail = useSelector((root: RootState) => {
    return root?.user?.userDetail as IUserData
  })

  useEffect(() => {
    dispatch(getUserDetail({userId: params.username as string}))
  }, [params.username])

  return (<>
    <p>
      Params : {userDetail?.firstName}
    </p>
  </>)
}