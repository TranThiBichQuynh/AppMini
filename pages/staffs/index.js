import StaffLayout from '../../components/staffLayout'
import Head from 'next/head'
import { createMicrocmsClient } from "../../lib/microcmsClient";
import { LiffContext } from "../_app";
import { useContext, useEffect, useState } from 'react'
import { createReservation, getReservations } from "../../lib/useReservations";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Snackbar, Alert } from '@mui/material';
import { red, grey } from '@mui/material/colors';
import { lineNotify } from "../../lib/lineNotify";
import { fetchThisWeeks, isIncludeWorkday, getReservation, createReservationData } from '../../lib/util'
import { useRouter } from 'next/router'
import {DialogConfirm} from "../../components/dialogConfirm";

//var weekJp = ["日", "月", "火", "水", "木", "金", "土"];

export default function Staff({ serviceDomain, microcmsApiKey }) {
  const { profile } = useContext(LiffContext);
  const [staff, setStaff] = useState(undefined);
  const [reservations, setReservations] = useState(undefined);
  const [snackMessage, setSnackMessage] = useState(undefined);

  const client = createMicrocmsClient({
    serviceDomain: serviceDomain,
    apiKey: microcmsApiKey,
  });
  const router = useRouter()
  useEffect(() => {
    const { id } = router.query
    if(!id)return ;
    client.get({
      endpoint: `staffs/${id}`
    }).then((content) => {
      setStaff(content)
      getReservations(client, `staff[equals]${staff?.id}`).then((_reservations) => {
        setReservations(_reservations)
      })
    })
  }, [router])

  useEffect(() => {
    getReservations(client, `staff[equals]${staff?.id}`).then((_reservations) => {
      setReservations(_reservations)
    })
  }, [staff])

  if(!staff || !reservations) {
    return <></>
  }
  //const workdays = staff.workdays.map((e) => new Date(e.workday));
  //const dates = fetchThisWeeks();
  const reserve = (staffId, profile) => {
    const reservation = createReservationData( staffId, profile)
    createReservation(client, reservation, staff, () => {
      setReservations([...reservations, reservation])
      //const date = new Date(reservation.reservationAt).toLocaleString()
      const message = `${staff.staffName}さん：${reservation.userName}様の`
      //const userMessage = `${date}の予約をしました`
      lineNotify(message)
      setSnackMessage(userMessage)
    })
  }

  return (
    <StaffLayout staff={staff}>
      <Head>
        <title>{staff.staffName}</title>
      </Head>
        <section>
          <div>
            <p className='font-bold flex'>実務経験</p>
            <p>{staff.experience}</p>
          </div>
          <div>
            <p className='font-bold'>スキル</p>
            <p>{staff.skills}</p>
          </div>
          <div>
            <DialogConfirm/>
          </div>
        </section>
        {
          <Snackbar
            open={!!snackMessage}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Alert onClose={()=>{setSnackMessage(undefined)}} severity="success">
              {snackMessage}
            </Alert>
          </Snackbar>
        }
    </StaffLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      liffId: process.env.LIFF_ID,
      serviceDomain: process.env.SERVICE_DOMAIN,
      microcmsApiKey: process.env.MICROCMS_API_KEY
    }
  }
}
