import time
import git
from git import RemoteProgress

class CloneProgress(RemoteProgress):
    def update(self, op_code, cur_count, max_count=None, message=''):
        if message:
            print(message)

print('Cloning into %s' % git_root)
git.Repo.clone_from('https://github.com/phaticusthiccy/WhatsAsenaDuplicated', 
        branch='master', progress=CloneProgress())
