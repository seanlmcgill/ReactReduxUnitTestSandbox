using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactReduxUnitTestSandbox.Models;

namespace ReactReduxUnitTestSandbox.Services
{
    public interface ITodoService
    {
        IEnumerable<TodoItem> GetTodoItems();
    }
}
