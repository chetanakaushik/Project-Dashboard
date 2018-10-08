<?php

require '../../app/common.php';

$taskId = $_GET ['task_Id'] ?? 0;

// $taskId = intval($_GET['taskId'] ?? 0);

// if ($taskId < 1) {
//   throw new Exception('Invalid Task ID');
// }
//
//
// // 1. Go to the database and get all work associated with the $taskId
// $workArr = Work::getWorkByTaskId($taskId);
//
// // 2. Convert to JSON
// $json = json_encode($workArr, JSON_PRETTY_PRINT);
//
// // 3. Print
// header('Content-Type: application/json');
// echo $json;
