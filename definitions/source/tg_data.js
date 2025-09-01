// source not pratitioned

declare ({
  schema: "tg_jobs",
  name: "messages_raw_v4"
})

// partitioned by day
declare ({
  schema: "tg_jobs",
  name: "part_messages"
})

