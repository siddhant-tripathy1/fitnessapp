import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseVideos from './ExerciseVideos'
import Detail from './Detail'
import SimilarExercises from './SimilarExercises'
const ExerciseDetail = () => {
    const [exerciseDetail, setExercisesDetail] = useState({})
    const{id} = useParams()
    useEffect(() => {
        const fetchExerciseData = async () => {
          const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
          const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
          const exerciseDetailData = await fetchData(exerciseDbUrl, `/exercises/${id}`, exerciseOptions)
          setExercisesDetail(exerciseDetailData)
    }

    fetchExerciseData()
  }, [id])
  return (
    <Box>
    <Detail ExerciseDetail={exerciseDetail}/>
    <ExerciseVideos/>
    <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail