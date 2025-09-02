// source not pratitioned with last 3 month data 
declare ({
  schema: "tg_jobs",
  name: "messages_raw_v4"
})

// partitioned by month
declare ({
  schema: "tg_jobs",
  name: "part_messages"
})

declare ({
  schema: "tg_jobs",
  name: "roles_regex"
})


declare ({
  schema: "tg_jobs",
  name: "technologies_regex"
})

declare ({
  schema: "tg_jobs",
  name: "languages_regex"
})

