const TaskStatus = () => {
  return (
    <div>
      <h2 className="font-semibold">Task Status</h2>

      <p className="text-sm text-gray-400 mb-6">
        Select a ticket to add to Task Status
      </p>

      <h3 className="font-semibold mb-2">Resolved Task</h3>

      <p className="text-gray-400 text-sm">No resolved tasks yet.</p>
    </div>
  );
};

export default TaskStatus;
