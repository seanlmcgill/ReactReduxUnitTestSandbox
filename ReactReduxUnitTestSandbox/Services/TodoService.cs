using System;
using System.Collections.Generic;
using ReactReduxUnitTestSandbox.Models;

namespace ReactReduxUnitTestSandbox.Services
{
    public class TodoService : ITodoService
    {
        private readonly List<TodoItem> _todoItems = new List<TodoItem>();
        
        public TodoService()
        {
            var random =new Random();
            var max = random.Next(0, 20);
            for (var i = 0; i < max; i++)
            {
                var dueDate = DateTime.Now.AddDays(random.Next(365));
                var completed = random.Next(1, 5) == 1;
                _todoItems.Add(new TodoItem {
                        Id = i,
                        Completed = completed,
                        Title = $"Item Number {i}",
                        Description = $"Item number {i} details are blah blah blah. This is just a bunch of test text.",
                        DueDate = dueDate.ToLongDateString()
                    });
            }
        }

        public IEnumerable<TodoItem> GetTodoItems()
        {
            return _todoItems;
        }
    }
}